import { React, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { BiUserCircle } from 'react-icons/bi';
import { RiImageLine } from 'react-icons/ri';
import styled from 'styled-components';

const CommentModal = ({ ModalClose, modalData }) => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [imgFiles, setImgFiles] = useState(null);
  const { id, user_email } = modalData;

  // CommentModal에서만 사용되는 함수
  const UploadFile = e => {
    setImgFiles(e.target.files[0]);
  };
  const detectComment = e => {
    setComment(e.target.value);
  };

  const addComment = () => {
    setCommentList(commentList.concat(comment));
  };

  const ClickComment = e => {
    addComment();
    // e.preventDefault();
    const formData = new FormData();
    formData.append('content', comment);
    formData.append('filename', imgFiles);
    fetch(`http://10.58.3.89:8000/reviews/1/comment`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('토큰발급확인'), // 체크
      },
      body: formData,
    })
      .then(res => res.json())
      .then(commentInfo => {
        if (commentInfo.message !== null) {
          alert('댓글이 등록 되었습니다!');
          setComment(commentInfo);
        } else {
          alert('댓글을 작성해 주세요');
        }
      });
  };

  const EnterkeyComment = e => {
    if (comment !== '') {
      if (e.key === 'Enter') {
        ClickComment();
        e.target.value = '';
        setComment('');
      }
    }
  };

  return (
    <ModalContainer key={id}>
      <ToggleBackground onClick={ModalClose} />
      <Modal>
        <CloseComment>
          <VscChromeClose fontSize="20px" onClick={ModalClose} />
          <Comment>댓글</Comment>
        </CloseComment>

        <ProfileBox>
          <ProfilePic src="images/신발사진_001.jpg" alt="프로필 사진" />
          <UserInfo>
            <UserBox>
              <UserId>{user_email}</UserId>
            </UserBox>
            <SocialTimeLike>
              <Time>1시간 전</Time>
              <LikeCount>공감 30개</LikeCount>
            </SocialTimeLike>
          </UserInfo>
        </ProfileBox>

        <UploadWrapper>
          <CustomImg>
            <ImgWrapper>
              <EmptyImg src="" alt="" />
            </ImgWrapper>
          </CustomImg>
        </UploadWrapper>

        <CommentBox>
          <BiUserCircle fontSize="40px" color="lightgray" />
          <CommentInput
            type="text"
            onChange={detectComment}
            onKeyUp={EnterkeyComment}
            placeholder="댓글 작성"
          />

          <ImageInput
            type="file"
            accept="image/*"
            onChange={UploadFile}
            style={{ width: '75px' }}
          />

          <PostButton onClick={addComment}>게시</PostButton>

          <RiImageLine />
        </CommentBox>

        <GuestComment>
          {imgFiles && (
            <ImgFiles
              key="id"
              src={URL.createObjectURL(imgFiles)}
              onChange={UploadFile}
              alt="업로드 사진"
              style={{ width: '80px' }}
            />
          )}
          {commentList.map((comment, index) => {
            return (
              <NewComment key={index}>
                <NewCommentInfo>
                  <NewCommentList>
                    <UserName>sungho</UserName>
                    {comment}
                  </NewCommentList>
                </NewCommentInfo>
              </NewComment>
            );
          })}
        </GuestComment>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 981;
`;

const ToggleBackground = styled.div`
  display: flex;
  position: fixed;
  z-index: 980;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 30%;
  background-color: black;
`;

const Modal = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  z-index: 990;
  padding: 20px 60px;
  height: 90%;
  background: white;
`;

const CloseComment = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Comment = styled.p`
  font-size: 20px;
  width: 60px;
  height: 20px;
`;

const ProfileBox = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const UploadWrapper = styled.div``;
const CustomImg = styled.div``;
const ImgWrapper = styled.div``;
const EmptyImg = styled.img``;

const ProfilePic = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;

  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const UserBox = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const UserId = styled.p`
  margin-right: 10px;
  font-size: 15px;
  font-weight: 700;
`;

// const UserComment = styled.p`
//   font-size: 14px;
//   margin-bottom: 10px;
// `;

const SocialTimeLike = styled.div`
  display: flex;
`;

const Time = styled.p`
  margin-right: 10px;
  font-size: 10px;
  color: gray;
`;

const LikeCount = styled.p`
  font-size: 10px;
  color: gray;
`;
const CommentBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
`;
const CommentInput = styled.input`
  padding: 4px;
  border: 1px solid lightgray;
  border-radius: 15px;
`;

const NewComment = styled.ul`
  width: 100%;
  display: flex;
`;

const NewCommentInfo = styled.span`
  margin-right: 10px;
`;

const NewCommentList = styled.div`
  padding: 20px 0px 0px 40px;
`;

const UserName = styled.span`
  margin-right: 5px;
`;

const ImageInput = styled.input`
  width: 150px;
  margin-left: 5px;
  position: absolute;
  right: 20px;
  z-index: 10;
`;

const PostButton = styled.button``;

const GuestComment = styled.ul``;

const ImgFiles = styled.img``;

export default CommentModal;
