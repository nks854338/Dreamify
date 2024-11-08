import React from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import Navbar from "./Navbar";

const Container = styled.div`
  /* width: 100%; */
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  padding: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Post = () => {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="searchContainer">
          <h2>
            Explore popular post in this community
            <div>@ created with AI @</div>
          </h2>
          <div className="searchBox">
            <img
              src="images/search.png"
              alt=""
              style={{ height: "70%", padding: "20px", rotate: "-45deg" }}
            />
            <input
              type="search"
              placeholder="Enter you prompt for your image....."
            />
          </div>
        </div>
        <Wrapper>
          <CardWrapper>
            <ImageCard />
          </CardWrapper>
        </Wrapper>
      </div>
    </>
  );
};

export default Post;
