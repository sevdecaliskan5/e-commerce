import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
  } from "react-icons/fi";
  import { NavLink } from "react-router-dom";
  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
  import { IconType } from "react-icons";
  
  const CartDropdown = ({ visibleItem }) => {
    return (
      <div className="p-8 pb-56 flex items-center justify-center bg-white">
        <motion.div className="relative">
          <NavLink
            to="/cart"
            exact
            className="flex items-center"
            hidden={!visibleItem}
          >
            <i className="bx bx-cart  text-2xl" hidden={!visibleItem}></i>
  
            <p hidden={!visibleItem}>1</p>
          </NavLink>
          {/* <button className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors">
            <span className="font-medium text-sm">Post actions</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button> */}
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <li Icon={FiEdit} text="Edit" />
            <li Icon={FiPlusSquare} text="Duplicate" />
            <li Icon={FiShare} text="Share" />
            <li Icon={FiTrash} text="Remove" />
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text, Icon, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default CartDropdown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };