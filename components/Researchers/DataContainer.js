export default function DataContainer({ label = '', data = '' }) {
	return (
		<>
			<div className="Data-container">
				<span className="label">{label}</span>
				<span className="data">{data || '--'}</span>
			</div>
			<style jsx>{`
				.Data-container {
					min-height: 2rem;
					display: flex;
					align-items: center;
					gap: 10%;
					border-bottom: 0.5px solid #ddd;
				}
				span {
					display: inline-flex;
				}
				.label {
					justify-content: right;
					min-width: 45%;
					font-weight: 500;
				}
			`}</style>
		</>
	)
}
