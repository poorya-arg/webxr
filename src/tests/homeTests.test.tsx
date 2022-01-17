import React from "react";
import { render, screen } from "@testing-library/react";
import { HomeHeader } from "../components/home/HomeHeader";
import Enzyme, { mount,shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Button } from "../components/Widgets/Button";
import { ProductColors } from "../consts/consts";
import { IssuesListItem } from "../components/home/issues/IssuesListItem";
Enzyme.configure({ adapter: new Adapter() });

describe("Header test cases", () => {
  it("Text render", () => {
    const wrapper = mount(
      <HomeHeader/>
    );
    const header = wrapper.find("header")
    expect(header.text()).toBe("List Of Github Issues For ReactJS Repository")
  })
})

describe("Check Button component functionality", () => {
  it("Text render", () => {
    const wrapper = mount(
      <Button text="BUTTON" onChange={()=>null} value=""/>
    );
    expect(wrapper.text()).toBe("BUTTON")
  })
  it("Disabled", () => {
    render(
      <Button text="BUTTON" disabled={true} onChange={()=>null} value=""/>
    );
    const button = screen.getByText("BUTTON")

    expect(button).toHaveStyle('opacity: 0.5')
  })
  it("Selected", () => {
    render(
      <Button text="BUTTON" selected={true} onChange={()=>null} value=""/>
    );
    const button = screen.getByText("BUTTON")

    expect(button).toHaveStyle(`background: ${ProductColors.activeButtonColor}`)
  })
})

describe("Issues list item tests", ()=>{
  it("Time render",()=>{
    const wrapper = mount(
      // @ts-ignore
      <IssuesListItem item={{
        title:"LIST ITEM",
        createdAt:"2021-11-15T13:51:46Z"
      }}/>
    );
    const text = wrapper.find('time')
    expect(text.text()).toBe("15/11/2021 01:51 PM")
  })
  it("Link test",()=>{
    render(
      // @ts-ignore
      <IssuesListItem item={{
        title:"LIST ITEM",
        createdAt:"2021-11-15T13:51:46Z",
        url:"www.reactjs.com"
      }}/>
    );
    const text = screen.getByRole('link')
    expect(text).toHaveAttribute('href', "www.reactjs.com")
  })
})