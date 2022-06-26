import React, { useState } from 'react';
import User from '../../../../assets/images/profile-user.png';
import setTime from '../../../../utility/setTime';

export default function ReplyOfReply(props) {
  const [isReply, setReply] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [isLike, setLike] = useState(false);

  const replyForm = <form onSubmit={e => { e.preventDefault(); setReply(false); props.commentPosted(name, email, phone, content, props.rep['owner'], props.reply_id); setContent('');}} className='mt-4 mb-0'>
    <div className="form-row">
        <div className="col-md-6 col-lg-4 form-group">
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} name="author" size="30" aria-required='true' placeholder="Name*"/>
        </div>
        <div className="col-md-6 col-lg-4 form-group">
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} name="cf-email" size="30" aria-required='true' placeholder="E-mail*"/>
        </div>
        <div className="col-lg-4 form-group">
            <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} name="url" size="30" placeholder="Phone Number*"/>
        </div>
        <div className="col-12 form-group">
            <textarea className="form-control" onChange={(e) => setContent(e.target.value)} name="comment" cols="45" rows="4" aria-required="true" placeholder={"You are replying to @" + props.rep['owner']}></textarea>
        </div>
    </div>
    <button type="submit" class="btn btn-dark" id="submit" name="submit">Submit</button>
  </form>;

  return (
    <li className='pl-5 pl-lg-8'>
        <div class="d-flex align-items-center mb-2">
        <div class="avatar mr-4">
            <img src={User} alt="" class="avatar-img"/>
        </div>
        <div>
            <b class="fn">{props.rep['owner']}</b>
            <div class="small text-muted">{setTime(props.rep['created_at'], true)}</div>
        </div>
        </div>
        <p><b>@{props.reply_name}</b> {props.rep['content']}</p>
        <p>
            {isLike ? <i onClick={() => { setLike(false); props.unLikeComment(props.rep['id']) }} style={{cursor: 'pointer'}} class="fa fa-thumbs-up"></i> : <i style={{cursor: 'pointer'}} onClick={() => {setLike(true); props.likeComment(props.rep['id'])}} class="far fa-thumbs-up"></i>}
            &nbsp;{props.rep['like_count']} &nbsp;&nbsp; 
            <strong onClick={() => setReply(!isReply)} style={{cursor: 'pointer', color: '#FCAF17'}}>Reply</strong>
        </p>
        {isReply ? replyForm : null}
    </li>
  )
}
