---
layout: single
title: CSC358 Midterm Review
permalink: /academics/csc358-midterm
header:
  image: /assets/images/academics/csc309/header.jpg
  teaser: /assets/images/academics/csc309/teaser.jpg
  caption: "Photo credit: [**lorewing**](http://www.lorewing.com/en/news/tag/web-development)"
excerpt: "Summary for midterm review"
---

## Go-Back $$n$$ algorithm for sender A and receiver

### Sender A

1. Set $$SN_{min}$$ and $$SN_{max}$$ to $$0$$,
2. Repeat 2 - 3 forever in any order
3. If $$SN_{max} < SN_{min} + n$$ and a packet is available from the higher layer, accept that packet, assign number $$SN_{max}$$ to it, and increment $$SN_{max}$$.
4. If a request number $$RN > SN_{min}$$ arrives from B, increase $$SN_{min}$$ to $$RN$$.
5. If $$SN_{min} < SN_{max}$$ and no packet is currently in transmission, transmit a packet SN, where $$SN_{min} < SN < SN_{max}$$

### Receiver B

1. Set $$RN$$ to $$0$$, Repeat 2 - 3 forever.
2. When error-free packet $$SN$$ arrives from A, if $$SN == RN$$, release this packet to the higher layer and increment $$RN$$.
3. Within bounded delay after an error-free packet is received, transmit request number $$RN$$ to $$A$$

### tracing: Window size $$n=5$$, 1 packet at A, initial state ($$A$$ and $$B$$ both at step 1)

1. A packet arrives $$A$$ from higher level. By step $$A$$3, $$SN=SN_{max}=0$$
    -   $$SN = 0$$, $$RN = 0$$, $$SN_{max} = 1$$, $$SN_{min} = 0$$
2. $$A$$ send $$SN$$ to $$B$$.
3. Successfully delivered. By step $$B$$2, packet sent to higher level and $$RN++$$.
    -   $$SN = 0$$, $$RN = 1$$, $$SN_{max} = 1$$, $$SN_{min} = 0$$
4. By step $$B$$3, $$B$$ send $$RN$$ back to $$A$$
5. Successfully delivered. By step $$A$$4, $$SN_{min} = RN$$
    -   $$SN = 0$$, $$RN = 1$$, $$SN_{max} = 1$$, $$SN_{min} = 1$$
6. 
