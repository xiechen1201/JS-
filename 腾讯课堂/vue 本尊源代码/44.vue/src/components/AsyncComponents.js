import { defineAsyncComponent } from 'vue';
import Loading from './Loading';
import Error from './Error';

export const Intro = defineAsyncComponent({
  loadingComponent: Loading,
  errorComponent: Error,
  delay: 0,
  loader: () => new Promise(resolve => setTimeout(() => resolve(import(/* webpackChunkName: "Intro" */ './Intro')), 1000))
});
export const List = defineAsyncComponent({
  loadingComponent: Loading,
  errorComponent: Error,
  delay: 0,
  loader: () => new Promise(resolve => setTimeout(() => resolve(import(/* webpackChunkName: "List" */ './List')), 1000))
});
export const Article = defineAsyncComponent({
  loadingComponent: Loading,
  errorComponent: Error,
  delay: 0,
  loader: () => new Promise(resolve => setTimeout(() => resolve(import(/* webpackChunkName: "Article" */ './Article')), 1000))
});