import { React, useState } from 'react';
import { VscSmiley, VscComment, VscCloudUpload } from 'react-icons/vsc';
import CommentModal from '../StyleTrend/CommentModal';
import styled from 'styled-components';

export default function StyleLayout({ styleData }) {
  const { content, image_url, product, user_email } = styleData;
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };
  return (
    <FeedBox>
      <Profile>
        <UserInfo>
          <ProfileImg src={image_url} />
          <ProfileInfo>
            <ProfileName>{user_email}</ProfileName>
            {/* <UploadTime></UploadTime> */}
          </ProfileInfo>
        </UserInfo>
        <FollowBtn> 팔로우 </FollowBtn>
      </Profile>
      <FeedImg src={image_url} />
      <ProductContainer>
        <ProductTag>상품태그 1개</ProductTag>
        <ProductImg src={product.product_image} />
        <ProductName>{product.product_en_name}</ProductName>
      </ProductContainer>
      <SocialBtn>
        <LikeCommentBox>
          <VscSmiley fontSize="30px" />
          <VscComment fontSize="30px" onClick={openModal} />
        </LikeCommentBox>
        <VscCloudUpload fontSize="30px" />
      </SocialBtn>
      <LikeCount>공감 30개</LikeCount>
      <CommentText>
        <Text>{content}</Text>
        <ViewMore>...더보기</ViewMore>
      </CommentText>{' '}
      {modal ? (
        <CommentModal ModalClose={closeModal} modalData={styleData} />
      ) : null}
    </FeedBox>
  );
}

const FeedBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px 0px 50px 0px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

// const UploadTime = styled.p`
//   font-size: 16px;
// `;

const UserInfo = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
`;

const FollowBtn = styled.div`
  padding: 8px 18px;
  font-size: 14px;
  background-color: black;
  color: white;
  border-radius: 10px;
`;

const FeedImg = styled.img`
  width: 450px;
  height: 500px;
  /* background-color: tomato; */
  margin-bottom: 10px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTag = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const ProductImg = styled.img`
  width: 130px;
  height: 130px;
  /* background-color: black; */
  margin-bottom: 10px;
`;

const ProductName = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

// const ProductPrice = styled.p`
//   font-size: 15px;
//   font-weight: 700;
//   margin-bottom: 10px;
// `;

const SocialBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const LikeCommentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;
const LikeCount = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`;

const CommentText = styled.div`
  font-size: 13px;
`;

const Text = styled.span`
  font-size: 15px;
`;

const ViewMore = styled.span`
  font-size: 13px;
`;
