---
layout: single
title: DailyUI#001 Sign Up
permalink: /design/dailyui-001
date: 2017-01-29
header:
  image: /assets/images/design/dailyui/001/header.png
  teaser: /assets/images/design/dailyui/001/teaser.png
  caption: "Photo credit: [**Jiacheng Jiang**](/)"
excerpt: "A card design sign up page"

---
![page title](/assets/images/design/dailyui/001/header.png)

The page consists of a sign up form, a progress indicator, a blurred background image and a page title.

## Sign Up Form

### Form Shape

I have chosen rounded rectangle for the shape of the sign up form, with a drop shadow (`0px 7px 50px rgba(0, 0, 0, .3)`) to analogue the material texture of a piece of paper. This concept is inspired by Google's Material Design Guideline, which claims that layers should have thickness. By using a paper-like visual effect, I'm trying to provide the user with a seamless experience.

## Title
![page title](/assets/images/design/dailyui/001/teaser.png)

The page title (Sign up) comes with a rounded rectangle logo.

### Font and colors

-   Filled fields: Microsoft Yahei Light, `14px`, `#000000`
-   Unfilled fields: Microsoft Yahei Light, `14px`, `#808080`
-   Headers: Myriad Pro, `14px`, `#999999`
-   Horizontal Rules: `0.5px`, `#808080`
-   Validator Pass: `#39b54a`
-   Validator Fail: `#ed1c24`
-   Validator Fail Field background: `#fb3aa`
-   Indicator Finished: `#ffffff`
-   Indicator Unfinished: `#ffffff`, `50% opacity`

### Form Fields

Fields are indicated with an underline. The unfilled fields are marked grey and the filled ones are in black. When a field fails validation, the background becomes light red.

### Drop-down selector

Selectors are not illustrated in the mockup, but selectable fields are indicated with a triangle pointing down.

### Validation Indicator

Validation indicators may be the only bright-colored component in the form. The shape of the icon is also rounded rectangle, to match the shape of the form. The icon comes with a tick or a cross accordingly.

## Progress Indicator

It's always necessary to notice the users of their current status. The indicator is vertically placed on the right of the form, to indicate the current step of signing up. The completed steps are solid colored, as the upcoming steps are colored in white with 50% opacity.

## Background

The background image is Gaussian Blurred and dimmed together with the site logo, to help user focus on the foreground.

## Credits

### Backgound Image

![background](/assets/images/design/dailyui/001/cktu7gnldea-wade-gardner.jpg)
Took by [Wade Gardner](https://unsplash.com/search/toronto?photo=CKtu7gnLDeA)
