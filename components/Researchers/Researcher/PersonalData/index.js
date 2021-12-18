import Image from 'next/image'

import { useState } from 'react'
import profileDefault from 'assets/images/profile-default.svg'
import ResearcherInfoContainer from '../../ResearcherInfoContainer'
import DataContainer from '../../DataContainer'
import { IconButton } from '@mui/material'
import { EditOutlined } from '@mui/icons-material'

import ModalPersonalData from './ModalPersonalData'
import { ModalContext } from 'contexts'
import { format } from 'date-fns'

export default function PersonalData({ researcher, token }) {
	const [edit, setEdit] = useState(false)
	const [personalData, setPersonalData] = useState(researcher)

	return (
		<>
			<ModalContext.Provider
				value={{
					open: edit,
					setOpen: setEdit,
					data: personalData,
					setData: setPersonalData,
				}}
			>
				<div className="Personal-data">
					{token && (
						<div className="edit">
							<IconButton
								color="success"
								style={{ backgroundColor: '#00bf661a' }}
								onClick={() => setEdit(true)}
							>
								<EditOutlined />
							</IconButton>
						</div>
					)}
					<ResearcherInfoContainer>
						<div className="image-profile">
							<Image
								alt={`${personalData.name} ${personalData.lastName}`}
								src={profileDefault}
								layout="responsive"
							/>
						</div>
						<div className="data-profile">
							<DataContainer label="Resumen" data={personalData.abstract} />
							<DataContainer label="DNI" data={personalData.dni} />
							<DataContainer label="Nombre" data={personalData.name} />
							<DataContainer label="Apellido" data={personalData.lastName} />
							<DataContainer
								label="Correo electrónico"
								data={personalData.email}
							/>
							<DataContainer
								label="Fecha de nacimiento"
								data={format(new Date(personalData.birthDate), 'dd/MM/yyyy')}
							/>
						</div>
					</ResearcherInfoContainer>
					<ModalPersonalData researcher={personalData} token={token} />
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
					transition: 0.5s transform, 0.5s opacity;
				}
			`}</style>
			{/* 			transform: translateX(3rem);
				.Personal-data:hover .edit {
					opacity: 1;
					transform: translateX(0);
				} */}
		</>
	)
}
