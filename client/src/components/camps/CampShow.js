import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCamp } from '../../actions';

class CampShow extends Component {
    
    componentDidMount() {
         const { id } = this.props.match.params;
         this.props.fetchCamp(id);   
    }

    render() {

        if(!this.props.camp) {
            return <div>Loading...</div>
        }

        const { id, name, price, description, image } = this.props.camp;
     
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
                        <div className="thumbnail">
                            <img className="img-responsive" src={image} alt={name}/>
                            <div className="caption-full">
                                <h4>{price}/night</h4>
                                <h4>{name}</h4>
                                <p>{description}</p>
                                <p>
                                    <em>Submitted By USER</em>
                                </p>
                                <Link to={`/camps/edit/${id}`} className="btn btn-xs btn-warning">Edit</Link>
                                <Link to="/camps/edit" className="btn btn-xs btn-danger">Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return { camp: state.camps[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchCamp })(CampShow);