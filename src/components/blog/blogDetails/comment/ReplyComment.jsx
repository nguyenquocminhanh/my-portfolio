import React, { useState } from 'react';
import User from '../../../../assets/images/profile-user.png';

export default function ReplyComment() {
  const [isReply, setReply] = useState(false);
  const replyForm = <form>
    <textarea name="cf-message" id="cf-message" class="form-control required my-3" rows="3"></textarea>
    <span type="submit" class="btn btn-dark" id="submit" name="submit">Submit</span>
  </form>;

  return (
    <li>
        <div class="d-flex align-items-center mb-2">
            <div class="avatar mr-4">
                <img src={User} alt="" class="avatar-img"/>
            </div>
            <div>
                <b class="fn">Amanda Rhodes</b>
                <div class="small text-muted">6 January 2020 07:16</div>
            </div>
        </div>
        <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <i class="far fa-thumbs-up"></i> 3 <strong onClick={() => setReply(true)} style={{cursor: 'pointer', color: '#FCAF17'}}>Reply</strong>
        {isReply ? replyForm : null}

        <ul>
            <li>

                <div class="d-flex align-items-center mb-2">
                <div class="avatar mr-4">
                    <span class="avatar-title rounded">MW</span>
                </div>
                <div>
                    <b class="fn">Mark White</b>
                    <div class="small text-muted">6 January 2020 07:16</div>
                </div>
                </div>
                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                <a href="#">Reply</a>
            </li>
           
            <li>

                <div class="d-flex align-items-center mb-2">
                <div class="avatar mr-4">
                    <span class="avatar-title rounded">JW</span>
                </div>
                <div>
                    <b class="fn">John Work</b>
                    <div class="small text-muted">6 January 2020 07:16</div>
                </div>
                </div>
                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                <a href="#">Reply</a>

            </li>
         
        </ul>
    </li>
  )
}
