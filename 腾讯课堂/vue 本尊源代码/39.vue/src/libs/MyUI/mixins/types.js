export default {
  props: {
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'success',
          'warn',
          'danger'
        ].includes(value);
      }
    }
  }
}