import React from "react";
import HamburgerMenu from "../../ui/ui-hamburger-menu/HamburgerMenu";
import ProfileInfo from "../../ui/ui-profile-info/ProfileInfo";
import "./PageLayout.scss";

const PageLayout = (props: any) => {
    return (
        <div className="page-layout">
            <ProfileInfo/>
            {props.children}
            <HamburgerMenu/>
        </div>
    );
}

export default PageLayout;