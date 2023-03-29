import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import video from '../../../assets/video/video.mp4'
import "./DetailPost.scss"
import "../../Content/Content.scss"
import PostItem from "../Posts/PostItem"
import _ from 'lodash'
import EditorPost from "./Editor"
import Comments from "./Comments"
import { useImmer } from "use-immer"
const DetailPost = () => {
    const data = [
        {
            id: 1,
            num_Evaluate: 76,
            imgUser: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png',
            name: 'r/AskReddit1',
            info: 'u/purple_rasberries1',
            post_time: '7 seconds',
            post_detail: 'What video game have you played the most?',
            numComment: 56,
            type: 'text'
        },
        {
            id: 2,
            num_Evaluate: 22,
            imgUser: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png',
            name: 'r/AskReddit2',
            info: 'u/purple_rasberries2',
            post_time: '12 hours',
            post_detail: 'Countries with the most firearms in Civil hands',
            img_detail: 'https://preview.redd.it/zye4bxyokapa1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=d322e29fe507cd52537e3ee5ced13b5d0514ae70',
            numComment: 112,
            type: 'img'

        },
        {
            id: 3,
            num_Evaluate: 17,
            imgUser: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png',
            name: 'r/AskReddit3',
            info: 'u/purple_rasberries3',
            post_time: '3 days',
            post_detail: 'What video game have you played the most?',
            vid_detail: video,
            numComment: 72,
            type: 'vid'

        },
        {
            id: 4,
            num_Evaluate: 78,
            imgUser: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png',
            name: 'r/AskReddit4',
            info: 'u/purple_rasberries4',
            post_time: '23 minutes',
            post_detail: 'I wanted to get my noodle wet',
            img_detail: 'https://external-preview.redd.it/mv8HWsjJivXRwnw0zn7yNPvis5GhRjUo6HlF08naVu4.jpg?width=640&crop=smart&auto=webp&v=enabled&s=9aa5a572afaa64ea53fd030b76969e8fa7d03a89',
            numComment: 26,
            type: 'img'
        },
        {
            id: 5,
            num_Evaluate: 46,
            imgUser: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png',
            name: 'r/AskReddit5',
            info: 'u/purple_rasberries5',
            post_time: '2 hours',
            post_detail: 'What video game have you played the most?',
            img_detail: 'https://i.redd.it/noinecoyi7pa1.png',
            numComment: 834,
            type: 'img'

        },
        {
            id: 6,
            num_Evaluate: 19,
            imgUser: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png',
            name: 'r/AskReddit5',
            info: 'u/purple_rasberries5',
            post_time: '9 minutes',
            post_detail: '"I wanted to get my noodle wet"',
            img_detail: 'https://preview.redd.it/hzfsxw2awcpa1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=1cef44ea5c4857aab112a6f9c20242e2893ca737',
            numComment: 126,
            type: 'img'
        },
    ]
    const { id } = useParams()
    const [posts, setPosts] = useImmer(data)
    const post = posts.find(postt => {
        return postt.id === +id
    })




    return (
        <div className="contain_DetailPost">
            <div className="main_detail">
                <PostItem post={post ? post : {}} setPosts={setPosts} />
                <div className="subPost">
                    <EditorPost />
                    <Comments />
                </div>
            </div>
            <div className="side">
                <div className="side1">12</div>
                <div className="side2">35</div>
            </div>
        </div>
    )
}


export default DetailPost