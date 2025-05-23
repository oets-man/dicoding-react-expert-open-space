import React, { useEffect } from 'react';
import TalkInput from '../components/TalkInput';
import TalksList from '../components/TalksList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { asyncPopulateUsersAndTalks } from '../states/shared/action';
import { asyncAddTalk, asyncToogleLikeTalk } from '../states/talks/action';

function HomePage() {
  // @TODO: get talks, users, and authUser state from store
  const { talks = [], users = [], authUser } = useSelector((state) => state);

  // @TODO: get dispatch function from store
  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: dispatch async action to populate talks and users data
    dispatch(asyncPopulateUsersAndTalks());
  }, [dispatch]);

  const onAddTalk = (text) => {
    // @TODO: dispatch async action to add talk
    dispatch(asyncAddTalk({ text }));
  };

  const onLike = (id) => {
    // @TODO: dispatch async action to toggle like talk
    dispatch(asyncToogleLikeTalk(id));
  };

  const talkList = talks.map((talk) => ({
    ...talk,
    user: users.find((user) => user.id === talk.user),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <TalkInput addTalk={onAddTalk} />
      <TalksList talks={talkList} like={onLike} />
    </section>
  );
}

export default HomePage;
