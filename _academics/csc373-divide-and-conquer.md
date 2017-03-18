---
layout: single
title: CSC373 Divide and Conquer
permalink: /academics/csc373-divide-and-conquer
#header:
#  image: /assets/images/academics/csc373/header.jpg
#  teaser: /assets/images/academics/csc309/teaser.jpg
#  caption: "Photo credit: [**lorewing**](http://www.lorewing.com/en/news/tag/web-development)"
excerpt: "Data Structure and Algo design"

---

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
