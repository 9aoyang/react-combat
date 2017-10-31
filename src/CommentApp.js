import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  componentWillMount () {
    this._loadComments()
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }

  _savaComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment (comment) {
    if(!comment) return
    if(!comment.username) alert('请输入用户名！')
    if(!comment.content) alert('请输入评论内容！')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({comments})
    this._savaComments(comments)
  }

  render () {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList  comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp
