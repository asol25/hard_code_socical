import React from "react";

interface MainSection {

}

export const MainSection: React.FC = () => {
    const Images = {
        "images": "https://instagram.fsgn5-11.fna.fbcdn.net/v/t51.2885-19/247945034_1565042227175607_3424548771147052332_n.jpg?_nc_ht=instagram.fsgn5-11.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BUC5fmbtDAIAX-xbjos&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT_aa6SmtpDpqmjDzRyHlKpjIcZK2O54BufYZZy9EIye6w&oe=62BB2AF1&_nc_sid=cff2a4"
    }
    return (
        <section className="section section__newsfeed">
            <div className="section__newsfeed__list">
                <div className="section__newsfeed__logo">
                    {/* <img alt="mongodb's profile picture" crossOrigin="anonymous" draggable="false" src={Images.images} ></img> */}
                    <h4>Aurelion Sol</h4>
                </div>
                <div className="section__newsfeed__images">
                    {/* <img src="" alt="" /> */}
                    <h1>Architecture</h1>
                </div>
            </div>
        </section>
    )
}