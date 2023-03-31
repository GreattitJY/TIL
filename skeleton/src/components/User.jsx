import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "./Skeleton";

const ProfileWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const ProfileContainer = styled.div`
  display: flex;
  box-shadow: inset 0 0 5px 5px gray;
  border-radius: 4px;
  padding: 10px;
  gap: 15px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: conver;
  border-radius: 50%;
`;

const Info = styled.div`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin: auto 0;

  h3,
  p {
    width: fit-content;
  }
`;

const Item = ({ userInfo }) => (
  <ProfileContainer>
    <Image src="https://cdn.pixabay.com/photo/2018/01/10/23/53/rabbit-3075088__480.png" alt="" />
    <Info>
      <h3>{userInfo.username}</h3>
      <p>{userInfo.email}</p>
    </Info>
  </ProfileContainer>
);

const Replacement = () => (
  <ProfileContainer>
    <Skeleton width={100} height={100} circle />
    <Info>
      <Skeleton width={150} height={30} />
      <Skeleton width={300} height={30} />
    </Info>
  </ProfileContainer>
);

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      console.log("load");
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setProfile(data);
    }, 2500);
  }, []);

  return (
    <div>
      <h2>User</h2>
      <ProfileWrapper>
        {profile
          ? profile.map((userInfo) => <Item {...{ userInfo }} key={userInfo.id} />)
          : Array.from({ length: 10 }).map((_, idx) => <Replacement key={idx} />)}
      </ProfileWrapper>
    </div>
  );
};

export default User;
