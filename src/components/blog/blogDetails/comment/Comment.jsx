import React, { useState } from 'react';
import User from '../../../../assets/images/profile-user.png';
import setTime from '../../../../utility/setTime';
import ReplyComment from './ReplyComment';

export default function Comment(props) {
  const [isReply, setReply] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [isLike, setLike] = useState(false);

  const replyForm = <form onSubmit={e => { e.preventDefault(); setReply(false); props.commentPosted(name, email, phone, content, props.comment['owner'], props.reply_id); setContent('');}} className='my-4 mx-n5'>
      <div className="form-row">
          <div className="col-md-6 col-lg-4 form-group">
            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" name="author" size="30" aria-required='true' placeholder="Name*"/>
          </div>
          <div className="col-md-6 col-lg-4 form-group">
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" name="cf-email" size="30" aria-required='true' placeholder="E-mail*"/>
          </div>
          <div className="col-lg-4 form-group">
            <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control" name="url" size="30" placeholder="Phone Number*"/>
          </div>
          <div className="col-12 form-group">
            <textarea onChange={(e) => setContent(e.target.value)} value={content} className="form-control" name="comment" cols="45" rows="4" aria-required="true" placeholder={"You are replying to @" + props.comment['owner']}></textarea>
          </div>
      </div>
      <button type="submit" class="btn btn-dark" id="submit" name="submit">Submit</button>
  </form>;

  // replies
  let repliesElement = null;
  if(props.comment['replies']) {
    repliesElement = props.comment['replies'].map(reply => {
      return <ReplyComment reply={reply} commentPosted={props.commentPosted} reply_id={reply['id']} reply_name={reply['target_name']} key={reply['id']} likeComment={props.likeComment} unLikeComment={props.unLikeComment}/>
    })
  }

  return (
    <li className='mb-6'>
        <div class="d-flex align-items-center mb-2 mx-n5" style={{marginLeft: '-15px'}}>
            <div class="avatar mr-4">
                <img src={User} alt="" class="avatar-img"/>
            </div>
            <div>
                <b class="fn">{props.comment['owner']}</b>
                <div class="small text-muted">{setTime(props.comment['created_at'], true)}</div>
                {/* <div class="small text-muted">6 January 2020 07:16</div> */}
            </div>
        </div>
        <p className='mx-n5'>{props.comment['content']}</p>
        <p className='mx-n5'>
          {isLike ? <i onClick={() => { setLike(false); props.unLikeComment(props.comment['id']) }} style={{cursor: 'pointer'}} class="fa fa-thumbs-up"></i> : <i style={{cursor: 'pointer'}} onClick={() => {setLike(true); props.likeComment(props.comment['id'])}} class="far fa-thumbs-up"></i>}
          &nbsp;{props.comment['like_count']} &nbsp;&nbsp; 
          <strong onClick={() => setReply(!isReply)} style={{cursor: 'pointer', color: '#FCAF17'}}>Reply</strong>
        </p>
        {isReply ? replyForm : null}

        <ul>
          {repliesElement}
        </ul>
    </li>
  )
}
