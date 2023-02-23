<script>

const { h } = Vue;

export default {
  name: 'App3',
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
        class: 'app3'
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
</script>

<style>
  .app3 {
    color: green;
  }
</style>