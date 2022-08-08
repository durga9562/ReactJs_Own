import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {thumbnailUrl} = projectDetails
  return (
    <>
      <button type="button" className="button">
        <li className="list-container">
          <img
            className="projects-item-image"
            src={thumbnailUrl}
            alt="thumbnail"
            key="thumbnailUrl"
          />
        </li>
      </button>
    </>
  )
}

export default ProjectItem
