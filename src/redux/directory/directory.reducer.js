const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'SIMAK UI',
      linkUrl: '/simak',
      tipe: 'simak'
    },
    {
      id: 2,
      title: 'UM UGM',
      linkUrl: '/umugm',
      tipe: 'umugm'
    },
    {
      id: 3,
      title: 'UTBK',
      linkUrl: '/utbk',
      tipe: 'utbk'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
