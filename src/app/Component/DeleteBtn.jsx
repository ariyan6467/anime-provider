import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
const DeleteBtn = ({animeId}) => {
    console.log(animeId);

function handleDelete(id) {
    console.log('Deleting item with id:', id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      // First Swal confirmation closes here, and we proceed with the delete request

      fetch(`https://next-anime-server.vercel.app/${id}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Delete successful', data);

          // Show success Swal after the delete action is complete
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          
         
        })
        .catch((error) => {
          console.error('Error deleting item:', error);

          // Show error Swal if the deletion fails
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting the item.",
            icon: "error"
          });
        });
    }
  });




      
    }

    return (
         <StyledWrapper>
      <button 
      onClick={()=>handleDelete(animeId)}
      className="btn cube cube-hover" 
      type="button">
        <div className="bg-top">
          <div className="bg-inner" />
        </div>
        <div className="bg-right">
          <div className="bg-inner" />
        </div>
        <div className="bg">
          <div className="bg-inner" />
        </div>
        <div className="text">Delete</div>
      </button>
    </StyledWrapper>
    );
};


const StyledWrapper = styled.div`
  .btn {
    display: block;
    padding: 0.01em 1em;
    background: transparent;
    outline: none;
    border: 0;
    color: #d4af37;
    letter-spacing: 0.1em;
    font-family: monospace;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
   margin-top: auto;
  margin-bottom: auto;
    width: 90px;
  }

  .cube {
    position: relative;
    transition: all 0.5s;
  }

  .cube .bg-top {
    position: absolute;
    height: 10px;
    background: #d4af37;
    bottom: 100%;
    left: 5px;
    right: -5px;
    transform: skew(-45deg, 0);
    margin: 0;
    transition: all 0.4s;
  }

  .cube .bg-top .bg-inner {
    bottom: 0;
  }

  .cube .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: #d4af37;
    transition: all 0.4s;
  }

  .cube .bg-right {
    position: absolute;
    background: #d4af37;
    top: -5px;
    z-index: 0;
    bottom: 5px;
    width: 10px;
    left: 100%;
    transform: skew(0, -45deg);
    transition: all 0.4s;
  }

  .cube .bg-right .bg-inner {
    left: 0;
  }

  .cube .bg-inner {
    background: #28282d;
    position: absolute;
    left: 2px;
    right: 2px;
    top: 2px;
    bottom: 2px;
  }

  .cube .text {
    position: relative;
    transition: all 0.4s;
  }

  .cube:hover .bg-inner {
    background: #FF0000;
    transition: all 0.4s;
  }

  .cube:hover .text {
    color: #28282d;
    transition: all 0.4s;
  }

  .cube:hover .bg-right,
  .cube:hover .bg,
  .cube:hover .bg-top {
    background: #28282d;
  }

  .cube:active {
    z-index: 9999;
    animation: bounce 0.1s linear;
  }

  @keyframes bounce {
    50% {
      transform: scale(0.9);
    }
  }`;

export default DeleteBtn;