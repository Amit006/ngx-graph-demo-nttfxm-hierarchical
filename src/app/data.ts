import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'first',
    label: 'A'
  }, {
    id: 'second',
    label: 'B'
  }, {
    id: 'c1',
    label: 'C1'
  }, 
  {
    id: 'c2',
    label: 'C2'
  },
  {
    id: 'department',
    label: 'department'
  },
   {
    id: 'frontend',
    label: 'frontend'
  },
   {
    id: 'backend',
    label: 'backend'
  },
   {
    id: 'analytics',
    label: 'analytics'
  }
];

export const clusters: ClusterNode[] = [
  {
    id: 'third',
    label: 'C',
    childNodeIds: ['c1', 'c2']
  },
  {
     id: 'forth',
    label: 'department claster',
    childNodeIds: ['backend', 'analytics', 'frontend']
  }
]

export const links: Edge[] = [
  {
    id: 'a',
    source: 'first',
    target: 'second',
    label: 'is parent of'
  }, {
    id: 'b',
    source: 'first',
    target: 'c1',
    label: 'custom label'
  }, {
    id: 'c',
    source: 'first',
    target: 'c1',
    label: 'custom label'
  }, {
    id: 'd',
    source: 'first',
    target: 'c2',
    label: 'custom label'
  },
  {
    id: 'e',
    source: 'first',
    target: 'department',
    label: 'under first'
  }
  ,
   {
    id: 'f',
    source: 'department',
    target: 'frontend',
    label: 'under Department'
  },
   {
    id: 'g',
    source: 'department',
    target: 'backend',
    label: 'under Department'
  }
  ,
   {
    id: 'h',
    source: 'department',
    target: 'analytics',
    label: 'under Department'
  }
];