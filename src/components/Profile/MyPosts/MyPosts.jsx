import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/profile-reducer";
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    }


    //React создай ссылку. Использовался раньше с классовыми компонентами.
    // Сейчас ссылки мы создаём с помощью хука useRef()
    const newPostElement = React.createRef()


    return (
        <div>
            <h3> My posts</h3>



         <PostReduxForm
             onSubmit={addNewPost}
         />


            <div className={s.posts}>
                {props.posts.map(post => {
                    return <Post postMessage={post.postMessage} likesCount={post.likesCount}/>
                })}

            </div>
        </div>
    )
}


const AddNewPostForm = (props) => {
    return     (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="type your post..."
                       name={"newPostText"}
                       component={Textarea}
                       validate={[required, maxLength10]}
                />
            </div>
            <button>Add post</button>
        </form>
    )
}


const PostReduxForm = reduxForm({form: 'newPost'})(AddNewPostForm)



export default MyPosts;