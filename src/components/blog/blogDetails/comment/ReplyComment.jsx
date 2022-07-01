import React, { useState } from 'react';
import User from '../../../../assets/images/profile-user.png';
import setTime from '../../../../utility/setTime';
import ReplyOfReply from './ReplyOfReply';

export default function ReplyComment(props) {
  const [isReply, setReply] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [isLike, setLike] = useState(false);

  const replyForm = <form onSubmit={e => { e.preventDefault(); setReply(false); props.commentPosted(name, email, phone, content, props.reply['owner'], props.reply_id); setContent('');}} className='my-4 mx-n5'>
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
            <textarea className="form-control" onChange={(e) => setContent(e.target.value)} name="comment" cols="45" rows="4" aria-required="true" placeholder={"You are replying to @" + props.reply['owner']}></textarea>
        </div>
    </div>
    <button type="submit" class="btn btn-dark" id="submit" name="submit">Submit</button>
  </form>;

  // replies
  let repliesElement = null;
  if(props.reply['replies']) {
    repliesElement = props.reply['replies'].map(rep => {
        return <ReplyOfReply rep={rep} commentPosted={props.commentPosted} reply_id={props.reply['id']} reply_name={rep['target_name']}key={rep['id']} likeComment={props.likeComment} unLikeComment={props.unLikeComment}/>
    })
  }

  return (
    <li className='pl-lg-9'>
        <div class="d-flex align-items-center mb-2 mx-n5">
            <div class="avatar mr-4">
                <img src={User} alt="" class="avatar-img"/>
            </div>
            <div>
                <b class="fn">{props.reply['owner']}</b>
                <div class="small text-muted">{setTime(props.reply['created_at'], true)}</div>
            </div>
        </div>
        <p className='mx-n5'><b>@{props.reply_name}</b> {props.reply['content']}</p>
        <p className='mx-n5'>
            {isLike ? <i onClick={() => { setLike(false); props.unLikeComment(props.reply['id']) }} style={{cursor: 'pointer'}} class="fa fa-thumbs-up"></i> : <i style={{cursor: 'pointer'}} onClick={() => {setLike(true); props.likeComment(props.reply['id'])}} class="far fa-thumbs-up"></i>}
            &nbsp;{props.reply['like_count']} &nbsp;&nbsp;
            <strong onClick={() => setReply(!isReply)} style={{cursor: 'pointer', color: '#050CDD'}}>Reply</strong>
        </p>
        {isReply ? replyForm : null}

        <ul>
            {repliesElement}
        </ul>
    </li>
  )
}
