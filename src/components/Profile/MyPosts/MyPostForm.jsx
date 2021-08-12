import React from "react";
import {Field, Form, reduxForm} from "redux-form";


 const AddNewPostForm = (props) => {
    return         <Form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="type your post..."
                   name={"newPostText"}
                   component={"textarea"}
            />
        </div>
        <button>Add post</button>
     </Form>

}


const PostReduxForm = reduxForm({form: 'newPost'})(AddNewPostForm)

const CreatePost = (props) => {
    const onSubmit = (values) => {
        props.addPost(values.newPostText)
    }
    return <div>
        <h1>Create new post</h1>
        <PostReduxForm onSubmit={onSubmit} />
    </div>
}

export default CreatePost;