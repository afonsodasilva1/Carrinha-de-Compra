import styled from "styled-components";


export const Carrinho = styled.section`

  width: 45rem;
  height: auto;
  max-height: 80rem;

  border-radius: 0.8rem;
  background: var(--bg-zinc-900);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header{
    width: 100%;

    text-align: center;
    padding-block: 1.5rem;
    border-bottom: 1px solid var(--bg-zinc-700);
  }

  footer{
    width: 100%;
    padding-inline: 2.5rem;
    padding-block: 2rem;
    
    border-top: 1px solid var(--bg-zinc-700);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header{
      width: 100%;
      display: flex;

      p{
        width: 100%;
        font-size: 1.8rem;
        display: flex;
        justify-content: space-between;
        
        span{
          font-weight: bold;
        }
      }
      
    }
    
  }

  ul{

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    padding-inline: 2.5rem;
    padding-block: 4rem;

    li.item{
      list-style: none;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      div.description{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1.5rem;

        padding-block: 2rem;
        padding-inline: 2rem;

        span{
          font-size: 1.3rem;
        }
        
        .price{
          display: flex;
          align-items: center;
          justify-content: space-between;

          strong{
            font-size: 1.4rem;
          }
          button{

            border: none;
            border-radius: .2rem;
            background: var(--bg-green-primary);
            
            color: var(--bg-white);
            padding: 0.4rem 0.8rem;

            cursor: pointer;
            transtion: background 0.4s ease;

            img{
              width: 2rem;
            }


            &:hover{
              background: var(--bg-green-secondary);
            }
          }
        }

      }

      img{
       width: 8rem;
       height: 8rem;
       border-radius: .4rem;
      }
      img:nth-child(3){
        width: 10rem;
      }

    }

    
  } 

`