import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="container">
        <div className="col-sm-10 m-auto">
          <div className="card">
          <img className="card-img-top" src={require('../images/' + project.img)} alt="movieimg" />
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.content}</p>
              <div><p>Time: {project.time}</p></div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'development'
  }])
)(ProjectDetails)
