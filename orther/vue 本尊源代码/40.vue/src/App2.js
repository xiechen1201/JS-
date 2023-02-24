import './App.scss';

const { h } = Vue;

export default {
  name: 'App2',
  data () {
    return {
      title: 'This is TITLE',
      author: 'Xiaoyesensen',
      dateTime: '2022-04-17',
      content: 'This is CONTENT.'
    }
  },
  render () {
    return h(
      'div',
      {
        class: 'app2'
      },
      h(
        'div',
        {
          class: 'article-box'
        },
        [
          h(
            'h1',
            {
              class: 'title'
            },
            this.title
          ),
          h(
            'p',
            {},
            [
              this.author + ' - ',
              h(
                'span',
                {
                  class: 'date-time'
                },
                this.dateTime
              )
            ]
          ),
          h(
            'p',
            {
              class: 'content'
            },
            this.content
          )
        ]
      )
    );
  }
}