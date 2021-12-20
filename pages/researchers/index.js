import Head from 'next/head'
import Link from 'next/link'
import api from 'services/api'

import ResearcherCard from 'components/Researchers/ResearcherCard'
import Title from 'components/General/Title'
import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import Container from 'components/General/Container'

export default function Researchers({ researchers }) {
	return (
		<>
			<Head>
				<title>Investigadores</title>
			</Head>

			<div className="Researchers-container">
				<Title>
					<span className="title">Investigadores</span>
					<TextField
						placeholder="Search"
						variant="outlined"
						size="small"
						color="success"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Search />
								</InputAdornment>
							),
						}}
					/>
				</Title>

				<div className="Grid">
					{researchers.map((researcher) => (
						<ResearcherCard
							key={`researcher-${researcher._id}`}
							researcher={researcher}
						/>
					))}
				</div>
			</div>
			<style jsx>{`
				.Researchers-container {
				}
				.Grid {
					display: grid;
					justify-content: center;
					grid-template-columns: repeat(auto-fill, minmax(200px, 460px));
					gap: 10px;
				}
				.title {
					margin-right: 1em;
				}
			`}</style>
		</>
	)
}

export const getServerSideProps = async ({ req, res }) => {
	const researchers = await api.researchers.getResearchers()

	return {
		props: {
			researchers,
		},
	}
}
