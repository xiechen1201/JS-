export default {
  mounted,
  updated
}

function mounted (el, bindings) {
  const isShow = bindings.value;
  el.commentNode = document.createComment('v-if');

  !isShow && el.parentNode.replaceChild(el.commentNode, el);
}

function updated (el, bindings) {
  const isShow = bindings.value,
        oldIsShow = bindings.oldValue;

  if (isShow !== oldIsShow) {
    isShow ? el.commentNode.parentNode.replaceChild(el, el.commentNode)
           : el.parentNode.replaceChild(el.commentNode, el);
  }
}