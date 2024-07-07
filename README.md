![imessag](./imegas/1p.jpg)

# Learning CSS 
### Deploy in netlify.com 



[Visit My Websit](https://rafikul-islam.netlify.app/)
## CSS Besic 
### what is css ?
- css is cascating style sheet and web page design 
- Add CSS ->: 1. Inline 2. Internal 3. Extranal
- css sentex 
```css:
body{
    background-color: read;
}

```
- body -> tag background-color is proparty read is value

- selectors and combinators
- basic selector -> element selector, id, class, actribut
```css:
a[href]{
    color:red;
}
```
- css specificity 
- css3 variable 
- typography -> font-size, font-weight, font-family, color, icon,text-align
- box model -> (margin, padding, boeder, content)
- design and card

## Intermediad css
- Backgraound propertics 
```css:
.intro{
   background:  url(/imegas/cover-3.jpg);
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
```
- basic leyout -> float, position, flex, grid 
- display propertic -> inlene, inline-block, block
- how to mack a circle
- resposivenes
```css:
@media screen and (max-width:700px) {
    header{
    background: none;
    text-align: center;
    width: 100%;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 2rem .5rem;
}
nav ul{
    flex-direction: column;
    background: #000;

}
.intro{
    background: none;
    height: 100vh;
 
}

.intro__titlr{
    color: #333333;
    letter-spacing: .2rem;
    font-size: 1.5rem;
}
.intro__description{
    color: #333333;
    font-size: .9rem;
    letter-spacing: .2rem;
    text-align: center;
}
nav ul li a{
    color: var(--secondery-color);
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10.7rem;
    }
    nav ul li {
        margin-top:0.7rem;
        }
}
```


## Advanced css
- transition 
- animation 
- Bem arcitectur

## Imessag link
[unsplash.com](https://unsplash.com/)