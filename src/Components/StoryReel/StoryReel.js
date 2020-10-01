import React from 'react';
import './StoryReel.css';
import Story from '../Story/Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://witapp.co/1302351_18727097/a5chmbh432hc0.jpg"
                profileSrc="https://i.pinimg.com/736x/69/ef/b1/69efb141548e90140e330aa870b61605.jpg"
                title="짱구"
            />
            <Story
                image="https://t1.daumcdn.net/cfile/tistory/192A703C4F66F47F09"
                profileSrc="https://menu.mt.co.kr/moneyweek/thumb/2014/02/06/06/2014020611038069247_1.jpg"
                title="둘리"
            />
            <Story
                image="https://kkukowiki.kr/images/2/27/%EB%85%B8%EC%A7%84%EA%B5%AC.jpg"
                profileSrc="https://mkids.dongascience.com/upload/press/2016/07/a732874e00c25395b7c980d570ae16d7.png"
                title="도라에몽"
            />
            <Story
                image="https://i.pinimg.com/originals/d8/9d/00/d89d00b28350885ca261534a304828d5.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/923339684326998016/CJvttBv8_400x400.jpg"
                title="라이츄"
            />
            <Story
                image="https://pbs.twimg.com/profile_images/883310597080612864/7bpQshsQ_400x400.jpg"
                profileSrc="https://trees.gamemeca.com/wp-content/uploads/2020/05/tree_ico_spongebob-314x264.png"
                title="스폰지밥"
            />
            
        </div>
    )
}

export default StoryReel
