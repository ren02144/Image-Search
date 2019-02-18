import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={spans:0};//set the span to adjust image size
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans=()=>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        //adjust image size to fit the webpage
        this.setState({spans}); 
    }

    render(){
        const{description, urls}=this.props.image;

        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}> 
                <img
                    ref={this.imageRef}
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular} 
                    //description and urls are attributes the unsplash response
                 />
            </div>
        );
    }
}

export default ImageCard;