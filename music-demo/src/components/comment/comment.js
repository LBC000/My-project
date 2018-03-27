import React, { Component } from 'react';
import './comment.css'
import Ajax from '../../js/ajax_1.0';


class CommentList extends Component {
    render() {
        let {content,user:{avatarUrl,nickname}} = this.props;
        return (
            <div>
                <div className="Comment_top" >
                    <div className="Comment_top_l" >
                        <i style={{ backgroundImage: `url(${avatarUrl})` }} ></i>
                        <p>{nickname}</p>
                        <span>2016年1月10日</span>
                    </div>
                    <div className="Comment_top_r" >

                    </div>
                </div>
                <div className="comment_b" >
                    <p>{content}</p>
                </div>
            </div>
        );
    }
}


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentData:null
         };
    }

    componentDidMount(){
        let _this = this;
        let id = this.props.id;
        console.log(id)
        Ajax({
            url:`http://localhost:4000/comment/music?id=${id}`,
            data:{
                // limit:30
            },
            success:function(data){
                _this.setState({
                    commentData:data
                })
            }
        })
    }

    render() {
        let list = this.state.commentData ? this.state.commentData.comments.map((e,i)=>{
            return <CommentList {...e} key={i} />
        }) :'';
        console.log(list)
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Comment;