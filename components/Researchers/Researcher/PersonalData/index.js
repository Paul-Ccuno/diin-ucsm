import Image from 'next/image'

import { useContext, useState } from 'react'
import profileDefault from 'assets/images/profile-default.svg'
import ResearcherInfoContainer from '../../ResearcherInfoContainer'
import DataContainer from '../../DataContainer'
import { IconButton } from '@mui/material'
import { EditOutlined } from '@mui/icons-material'

import ModalPersonalData from './ModalPersonalData'
import { ModalContext } from 'contexts'

export default function PersonalData({
	researcher,
	isAuthenticated = false,
	token,
}) {
	const [edit, setEdit] = useState(false)

	return (
		<>
			<ModalContext.Provider value={{ open: edit, setOpen: setEdit }}>
				<div className="Personal-data">
					<div className="edit">
						<IconButton
							color="success"
							style={{ backgroundColor: '#00bf661a' }}
							onClick={() => setEdit(true)}
						>
							<EditOutlined />
						</IconButton>
					</div>
					<ResearcherInfoContainer>
						<div className="image-profile">
							<Image
								alt={`${researcher.name} ${researcher.lastName}`}
								src={profileDefault}
								layout="responsive"
							/>
						</div>
						<div className="data-profile">
							<DataContainer label="Resumen" data={researcher.abstract} />
							<DataContainer label="DNI" data={researcher.dni} />
							<DataContainer label="Nombre" data={researcher.name} />
							<DataContainer label="Apellido" data={researcher.lastName} />
							<DataContainer
								label="Correo electrónico"
								data={researcher.email}
							/>
							<DataContainer
								label="Fecha de nacimiento"
								data={researcher.birdthDate}
							/>
						</div>
					</ResearcherInfoContainer>
					<ModalPersonalData researcher={researcher} token={token} />
				</div>
			</ModalContext.Provider>

			<style jsx>{`
				.Personal-data {
					position: relative;
				}
				.image-profile {
					height: 30vw;
					width: 30vw;
					min-height: 200px;
					max-height: 400px;
					min-width: 200px;
					max-width: 400px;
				}
				.data-profile {
					display: flex;
					flex-direction: column;
					padding: 0 2rem;
					width: 100%;
				}
				.edit {
					position: sticky;
					display: inline-block;
					top: 4.3rem;
					left: 95%;
					opacity: 0;
					transform: translateX(3rem);
					transition: 0.5s transform, 0.5s opacity;
				}
				.Personal-data:hover .edit {
					opacity: 1;
					transform: translateX(0);
				}
			`}</style>
		</>
	)
}
