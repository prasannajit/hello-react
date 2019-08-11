import React from 'react';
import { render } from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail comment="Awesome post" imageUrl={faker.image.avatar()} authorName="babu" time="6 PM"></CommentDetail>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail comment="Nice post" imageUrl={faker.image.avatar()} authorName="babu" time="6 PM"></CommentDetail>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail comment="Kool post" imageUrl={faker.image.avatar()} authorName="babu" time="6 PM"></CommentDetail>
            </ApprovalCard>
        </div>
    )
};

render(<App></App>, document.querySelector('#root'));