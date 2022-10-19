import React from "react";
import Tab from "react-bootstrap/Tab";
import {
  HomeIcon,
  InfoIcon,
  ShareIcon,
  TagIcon,
} from "../../Assets/SvgIcons/SvgIcons";
import {
  BottomNavigation,
  HeaderNavigation,
  CarouselSection,
} from "../../Components";
import { TabItem } from "../../Components/BottomNavigation/BottomNavigation";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <HeaderNavigation />
      <Tab.Container id="left-tabs-example" defaultActiveKey="home">
        <div className="home-page__main">
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <CarouselSection />
            </Tab.Pane>
            <Tab.Pane eventKey="featured">featured</Tab.Pane>
            <Tab.Pane eventKey="share">share</Tab.Pane>
            <Tab.Pane eventKey="info">info</Tab.Pane>
          </Tab.Content>
        </div>
        <BottomNavigation>
          <TabItem eventKey="home" icon={<HomeIcon />} text="Home" />
          <TabItem eventKey="featured" icon={<TagIcon />} text="Featured" />
          <TabItem eventKey="share" icon={<ShareIcon />} text="Share" />
          <TabItem eventKey="info" icon={<InfoIcon />} text="Info" />
        </BottomNavigation>
      </Tab.Container>
    </div>
  );
};

export default Home;
