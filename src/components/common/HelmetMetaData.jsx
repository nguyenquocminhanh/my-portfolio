import React from "react";
import { Helmet } from "react-helmet";
import Image from '../../assets/images/portfolio.png';

export default function HelmetMetaData(props) {
   let currentURL = props.currentURL;
   let title = props.title;
   let image = props.image !== null ? props.image : Image;
   let description = props.description !== null ? props.description  : "";

    return (
        <Helmet>
            <title>{title}</title>
            <meta property="url" content={currentURL} />
            <meta property="title" content={title} />
            <meta name="description" content={description} />
            <meta property="image" content={image} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta content="image/*" property="og:image:type" />
            <meta property="og:url" content={currentURL} />
            <meta property="og:description" content={description} />    
        </Helmet>
);
}