export const postUser = user => (
  $.ajax({
    url: 'api/users',
    type: 'POST',
    data: { user }
  })
);

export const postSession = user => (
  $.ajax({
    url: 'api/session',
    type: 'POST',
    data: { user }
  })
);

export const deleteSession = () => (
  $.ajax({
    url: 'api/session',
    type: 'DELETE'
  })
);
