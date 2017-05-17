---
layout: single
title: CSC373
permalink: /academics/csc373
#header:
#  image: /assets/images/academics/csc373/header.jpg
#  teaser: /assets/images/academics/csc309/teaser.jpg
#  caption: "Photo credit: [**lorewing**](http://www.lorewing.com/en/news/tag/web-development)"
excerpt: "Data Structure and Algo design"

---
# Greedy Algorithm
## Intro

To solve an instance of size $$n$$

1. Divide it into two (or more) subinstance of smaller size, e.g. $$\lfloor\frac{n}{2}\rfloor$$ and $$\lceil\frac{n}{2}\rceil$$.
2. Solve subinstances recursively.
3. Combine solutions to (2) to get a solution for the original instance

## Example 1 - Merge Sort

__Input:__ $$A$$ of $$n$$ numbers (index from 1), $$p, r \in [n] := \{1, 2, ..., n\}$$  
__Output:__ $$A[p...r]$$ contain elements from $$A[p...r]$$ in  increasing order & other elements are left unchanged.  

### Pseudocode

```
MergeSort(A, p, r):
    if p < r:
        q <- floor((p + r)):
        MergeSort(A, p, q)
        MergeSort(A, q + 1, r)
        Merge(A, p, q ,r)

Merge(A, p, q, r):
    init Array L of size q - p + 2
    init Array R of size r - q + 1
    for i = 1 to q - p + 1:
        L[i] <- A[p + i -1]
    for j = 1 to r - 1:
        R[j] <- A[q + j]
    L[q - p + 2] <- R[r - q + 1] <- infinity
    i <- j <- 1
    for k = p to r:
        if L[i] < R[j]:
            A[k] <- L[i]
            i++
        else:
            A[k] <- R[j]
            j++
```

### Proof

1. Loop invariant:
    $$A[p...k-1]$$ contains $$k-p$$ smallest elements from $$L$$ and $$R$$ in increasing order, and $$L[i]$$ & $$R[j]$$ are smallest elements in $$L$$ & $$R$$ respectively. Not in $$A[p...k-1]$$
2. $$MergeSort$$ is correct by trivial induction & part(1.)

### Measure of interest

number of comparisons of array elements

# Graph Algorithm

## Minimum Spanning tree

_shortened form of the phrase "minimum-weight spanning tree."_

__Input__: Adj - a list of $$G=(V, E), w : E \rightarrow \mathbb{R} $$  
__Output__: $$T \subseteq G$$ - spanning tree of minimum weight

### Kruskal's Algo
- Consider edges in ___increasing order of weights___; keep adding the edges, diregarding those that create ___cycles___  
- Runtime
    $$ O(|E|\log |E|) $$
    using Union-Find Data Structure

### Prim's Algo
- Start with an arbitrary vertex $$s\in V$$
- Keep growing the partial tree by adding the a least weight edge going out of the tree.

#### Pseudocode of Prim's Algo

```
Prims(Adj, w):
    Pick arbitrary s in V
    init Array cost of size |V|
    init Array prec of size |V|

    for v in V:
        cost[v] = infinity
        prev[v] = None

    cost[s] = 0

    init min priority queue Q(V)

    while Q is not empty:
        v = Q.extractMin()
        for u in Adj[v]:
            if w(v, w) < cost[u]:
                cost[u] = w(v, u)
                prev[u] = v

    return prev
```

- Runtime:
    $$O((|V|+|E|)\log|V|)$$

## Shortest Path Problem

__Input__: Weighted graph (directed or undirected):  
    $$G=(V,E)$$  
    $$C:E\rightarrow\mathbb{R}$$ Cost  
    $$s\in V$$ Source  
__Output__: $$dist[]$$ so that $$\forall u\in V, dist[u]=d(s,u)$$, where $$f(u,v)$$ is the shortest path from $$u$$ to $$v$$ or $$\infty$$ if such path does not exist.

### Dijkstra Algorithm
___Dijkstra is Greedy___
#### Pseudocode of Dijkstra
```
Dijkstra(Adj, c, s):
    init Array dist[] of size |V|
    init Array prev[] of size |V|

    for v in V:
        dist[v] = infinity
        prev[v] = None

    dist[s] = 0

    Q = minPQ(V) // by dist[]

    while Q is not empty:
        v = Q.extractMin()
        for u in Adj[v]:
            if dist[v] + c[v, u] <= dist[u]:
                dist[u] = dist[v] + c[v, u] //decreasing
                prev[u] = v

    return dist
```

Runtime: (If PQ implemented by binary heaps),
$$((|V| + |E|)\log|V|)

### Bellman-Ford Algorithm

#### Pseudocode for Bellman-Ford

```
update(e = (u, v)):
    if dist[v] > dist[u] + c(u, v):
        # If there's a better way to reach v
        dist[v] = dist[u] + c(u, v)
        prev[v] = u

Bellman-Ford(G, c, s):
    init array dist[] of size |V|
    init array prev[] of size |V|

    for v in V:
        dist[v] = infinity
        prev[v] = None

    dist[s] = 0

    for k = 1 to |V|:
        for e in E:
        update(e)

    return dist[]
```

#### Floyd-Warshall & Johnson's

## Network Flow

### local search
- Start with some feasible solution
- Perform local changes to get a better solution

### Ford-folkerson
- Start with all 0 flow (feasible)
- find augumenting $$s$$ to $$t$$ path in ___residual graph___

## Max-Flow Min-Cut Theorem
1. $$f$$ is a max-flow
2. no augumenting path in $$G_f$$
3. there exist a cut $$(S, T)$$ so that
$$|f| = c(S,T)$$

Runtime:
-   Case 1: Capacities are positive real numbers
    -   If some capacities are irrational, FF might not terminate.
    -   Such examples FF might converge to a flow that is no a maximum
-   Case 2: capacities are $$\mathbb{N}$$
    -   let $$f*$$ be max flow, FF can be made to run
    $$O(|f*||E|)$$
    each time we augment with path $$P$$, value of the flow increases by $$c(P)\geq 1$$  
    $$\Rightarrow$$ number of augumentations
    $$\leq |f*|$$  
    Each augmentation can be found by DFS/BFS in time
    $$O(|E|)$$
    assuming no redundant nodes (___not___ polynomial time)

### Edmonds-Karp Algorithm
Run FF using shortest unweighted path for augmentation Can be done with BFS in polynomial time.

Runtime:
$$O(|V||E|^2)$$

## Muti-source Multi-sink Max-Flow
