import { IRoute } from "@/typings";

function formatRouteTree(data: IRoute[]) {
  const parents = data.filter((el) => el.pid === 0);
  const children = data.filter((el) => el.pid !== 0);

  dataToTree(parents, children);

  return parents;

  function dataToTree(parents: IRoute[], children: IRoute[]) {
    parents.map((parent) => {
      children.map((child, index) => {
        if (parent.id === child.pid) {
          let _children: IRoute[] = JSON.parse(JSON.stringify(children));
          _children.splice(index, 1);
          dataToTree([child], _children);

          if (parent.children) {
            parent.children.push(child);
          } else {
            parent.children = [child];
          }
        } else {
        }
      });
    });
  }

  return parents;
}

export { formatRouteTree };
