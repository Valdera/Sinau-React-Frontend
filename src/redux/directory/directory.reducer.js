const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'SIMAK UI',
      linkUrl: 'tryout/simak',
      tipe: 'simak'
    },
    {
      id: 2,
      title: 'UM UGM',
      linkUrl: 'tryout/umugm',
      tipe: 'umugm'
    },
    {
      id: 3,
      title: 'UTBK',
      linkUrl: 'tryout/utbk',
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
