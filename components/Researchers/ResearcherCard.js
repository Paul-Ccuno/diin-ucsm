import { Avatar } from '@mui/material'
import Link from 'next/link'
import { colors } from 'styles/theme'

export default function ResearcherCard({ researcher }) {
	const { _id, name, lastName, abstract } = researcher
	return (
		<>
			<Link href={`/researchers/${_id}`}>
				<a>
					<div className="Researcher-card">
						<div className="left">
							<p className="name">
								{name} {lastName}
							</p>
							<p className="abstract">{abstract}</p>
						</div>
						<div className="right">
							<Avatar sx={{ bgcolor: colors.success, width: 50, height: 50 }}>
								{name.charAt(0) + lastName.charAt(0)}
							</Avatar>
						</div>
					</div>
				</a>
			</Link>
			<style jsx>{`
				.Researcher-card {
					// background-color: #eee;
					color: #000;
					border-radius: 5px;
					border: 1px solid #eaeaea;
					min-height: 100px;
					padding: 1rem;
					transition: 0.2s transform;

					display: flex;
					justify-content: space-between;
				}
				.Researcher-card:hover {
					// background-color: ${colors.success};
					transform: scale(1.01);
					border-color: ${colors.success};
				}
				.Researcher-card:active {
					transform: scale(0.99);
				}
				.name {
					font-weight: bold;
					color: ${colors.success};
				}
				.left > p {
				}
				.Researcher-card:hover > .left > p {
					color: ${colors.success};
				}

				.abstract {
					display: -webkit-inline-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
			`}</style>
		</>
	)
}
