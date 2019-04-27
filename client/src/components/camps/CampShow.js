import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCamp, deleteCamp, deleteComment } from '../../actions/campActions';
import { Button } from 'react-bootstrap';
import CampDelete from './CampDelete';

class CampShow extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
    componentDidMount() {
         const { id } = this.props.match.params;
         this.props.fetchCamp(id);   
    }

    onDeleteClick(campId, commentId) {
        this.props.deleteComment(campId, commentId);
    }

    renderComments() {
        const { comments, _id } = this.props.camp;
        const { user } = this.props.auth;
    
        return comments.map((comment, i) => 
            <div key={i}>
                <div className="row">
                    <div className="col-md-12">
                        <strong>{comment.username}</strong>
                        <p className="font-italic">
                            {comment.text}
                        </p>
                        <div className="float-right" >
                            {comment.author === user.id ? ( 
                            <button onClick={this.onDeleteClick.bind(this, _id, comment._id)}
                                className="btn btn-danger"
                            >Delete</button>
                            ) : null}
                        </div>
                    
                    </div>
                </div>
                <hr style={{margin: "5px"}}/>
            </div >
        );
    }

    render() {

        if(!this.props.camp) {
            return <div>Loading...</div>
        }

        const { _id, name, price, description, image } = this.props.camp;
        const { user } = this.props.auth;
        const { camp } = this.props;     
     
        return (
            <div className="container" style={{marginTop: "20px"}}>
                <div className="row">
                    <div className="col-md-3">
                        <p className="lead">YelpCamp</p>
                        <div className="list-group">
                            <li className="list-group-item active">Info 1</li>
                            <li className="list-group-item">Info 2</li>
                            <li className="list-group-item">Info 3</li>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className=".img-thumbnail">
                            <img className="img-responsive" src={image} alt={name} style={{width: "100%", marginBottom: "20px", height: "550px"}}/>
                            <div className="caption">
                                <h4 className="float-right">${price}/night</h4>
                                <h4>{name}</h4>
                                <p>{description}</p>
                                <p>
                                    <em>Submitted By {camp.username}</em>
                                </p>
                                {camp.author === user.id ? ( 
                                    <>
                                    <Link to={`/camps/edit/${_id}`} className="btn btn-info" style={{width: "90px", marginRight: "10px"}}>Edit</Link>
                                    <Button className="btn btn-danger" onClick={this.handleShow} style={{width: "90px"}}>
                                        Delete
                                    </Button>
                                    </>
                                ) : null}
                                <CampDelete
                                    deleteCamp={() => this.props.deleteCamp(_id)}
                                    show={this.state.show}
                                    close={this.handleClose} >
                                </CampDelete>

                            </div>
                        </div>

                        <div className="well">
                            <div className="text-right">
                                <Link to={`/camps/${_id}/comments/new`} className="btn btn-dark" style={{width: "130px"}}>Add Comment</Link>
                            </div>
                            <hr />
                            <div>
                                {this.renderComments()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    };
};

const mapStateToProps = (state, ownProps) => ({
    // return { camp: state.camps[ownProps.match.params.id] };
    camp: state.camps[ownProps.match.params.id],
    auth: state.auth
})

export default connect(mapStateToProps, { deleteCamp, fetchCamp, deleteComment })(CampShow);