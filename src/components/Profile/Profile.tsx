import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {IState} from '../../reducers';
import {useSelector} from 'react-redux';
import {ISingleUser} from '../../entities/users'
import {ISinglePhoto} from '../../entities/photos'
import {ISinglePost} from '../../entities/posts'

const Wrapper = styled.div`
  width: 800px;
  height: 1600px;
  margin-left: 310px;
`

const FirstBox = styled.div`
  height: 1600px;
  width: 800px;
  padding-left: 0;
  padding-top: auto;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`

const BigImage = styled.img`
  width: 40px;
  border-radius: 50%;
  padding-right: 20%;
  border: 1px solid black;
  margin: 0px;
  padding: 0;
  margin-left: 30px;
  margin-top: 30px;
`

const See = styled.div`
  margin-left: 30px;
  padding-top: 10px;
`

const SecondBox = styled.div`
  margin-top: -10px;
  margin-left: 150px;
`

const ImgBox = styled.div`
  padding-top: 10px;
  width: 450px;
  justify-content: space-between;
  display: flex;
  margin-left: 340px;
  margin-top: 10px;
`
const Shanna = styled.div`
  margin-left: 630px;
  margin-top: 0px;
`
const Number = styled.div`
  margin-left: 630px;
  margin-top: 10px;
`
const PubIcon = styled.div`
  margin-left: 0px;
  margin-top: -70px;
`
const SecBox = styled.div``
const TwoBox = styled.div`
  margin-left: 0px;
  padding-top: -5px;
`
const ThreeBox = styled.div`
  margin-left: 0px;
  padding-top: 15px;
`

const ExperBox = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  color: #c0c0c0;
`
const MergesBox = styled.div`
  width: 150px;
  height: 20px;
  margin-left: 30px;
  margin-top: 10px;
  padding-left: 10px;
  background-color: #add8e6;
  color: blue;
  display: flex;

  justify-content: space-between;
  display: flex;
  border-radius: 4px;
`
const MergesBoxs = styled.div`
  width: 150px;
  height: 20px;
  margin-left: 30px;
  margin-top: -5px;
  padding-left: 10px;
  background-color: #add8e6;
  color: blue;
  display: flex;

  justify-content: space-between;
  display: flex;
  border-radius: 4px;
`

const PanelBox = styled.div`
  margin-top: 15px;
  margin-left: 30px;
  font-size: 19px;
`

const HurTer = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  color: #c0c0c0;
`
const MontHo = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  font-size: 16px;
`
const AttachmentBox = styled.div`
  width: 750px;
  border-radius: 5px;
  background-color: #c0c0c0;
  margin-top: 10px;
  margin-left: 30px;
`
const CorpoBox = styled.div`
  margin-top: 15px;
  margin-left: 30px;
  font-size: 16px;
`
const InterBox = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  font-size: 18px;
`
const NameBox = styled.div`
  width: 750px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  margin-left: 30px;
  background-color: #c0c0c0;
`
const MiniatureImage = styled.img`
  width: 20px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid black;
  margin: 10px;
  padding: 0;
`
const NameBoxs = styled.div`
  width: 750px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  margin-left: 30px;
  background-color: #c0c0c0;
`

const DataBox = styled.div`
  width: 950px;
  margin-left: 30px;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
`

const InfoBox = styled.div`
  width: 950px;
  margin-left: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 15px;
`
const TableRow = styled.tr`
  width: 100%;
  justify-content: space-between;
  padding-top: 20px;
  display: flex;
  font-size: 20px;
  color: #2a3a6b;
`
const TableTitle = styled.th`
  width: 200px;
  padding-top: 10px;
`
const TableRows = styled.tr`
  width: 100%;
  justify-content: space-between;
  display: flex;
  font-size: 15px;
  color: black;
`

const detailsData = {
  merges: 'Merges and acquistion',
  cross: 'Cross border operation',
  transaction: 'Transaction over 500M$/$',
  paris: 'Paris bar assocition',
  bar: 'Tunisisan bar assocition',
  tunisia: 'Tunisia',
}

export const Profile: FC = () => {
    const usersList = useSelector<IState, ISingleUser[]>(state => state.users.usersList)
    const photosList = useSelector<IState, ISinglePhoto[]>(state => state.photos.photosList)
    const postsList = useSelector<IState, ISinglePost[]>(state => state.posts.postsList)

  const [user] = usersList
  const [userData, setUserData] = useState<any>(user)
  const [details, setDetails] = useState<any>(detailsData)
  const [editingA, setEditingA] = useState<boolean>(false)
  const [editingB, setEditingB] = useState<boolean>(false)

  useEffect(() => {
    setUserData(user)
  }, [user])

  const handleInputA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newUserData = { ...userData, [name]: value }
    setUserData(newUserData)
  }

  const handleInputB = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newDetails = { ...details, [name]: value }
    setDetails(newDetails)
  }

  return (
    <Wrapper>
      <FirstBox>
        <ImgBox>
          <img
            style={{ width: '20px', height: '20px' }}
            src="../Media/icons/comment-regular.svg"
            alt=""
          />
          Message
          <img
            src="../Media/icons/sim-card-solid.svg"
            style={{ width: '20px', height: '20px' }}
            alt=""
          />
          Create a request
          <img
            src="../Media/icons/briefcase-solid.svg"
            style={{ width: '20px', height: '20px' }}
            alt=""
          />
          Add to a cluster
          <img
            src="../Media/icons/times-solid.svg"
            style={{ width: '20px', height: '20px' }}
            alt=""
          />
        </ImgBox>
        <SecBox>
          <BigImage src={photosList[5] ? photosList[5].url : ''} alt="" />
          <Link to="/profile">
            <See>See profile</See>{' '}
          </Link>

          <SecondBox>
            <PubIcon>
              <div>
                {editingA ? (
                  <input
                    type="text"
                    name="name"
                    value={userData?.name}
                    onChange={handleInputA}
                  />
                ) : (
                  <h4>{userData?.name}</h4>
                )}

                <img
                  onClick={() => setEditingA(!editingA)}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginLeft: '620px',
                    marginTop: '-10px',
                  }}
                  src="../Media/icons/pencil-alt-solid.svg"
                  alt=""
                />
              </div>
            </PubIcon>
            <TwoBox>
              {editingA ? (
                <input
                  type="text"
                  name="username"
                  value={userData?.username}
                  onChange={handleInputA}
                />
              ) : (
                <h4>{userData?.username}</h4>
              )}
            </TwoBox>
            <ThreeBox>
              {editingA ? (
                <input
                  type="text"
                  name="website"
                  value={userData?.website}
                  onChange={handleInputA}
                />
              ) : (
                <h4>{userData?.website}</h4>
              )}
            </ThreeBox>
          </SecondBox>
        </SecBox>
        <Shanna>
          {editingA ? (
            <input
              type="text"
              name="email"
              value={userData?.email}
              onChange={handleInputA}
            />
          ) : (
            <h4>{userData?.email}</h4>
          )}
        </Shanna>
        <Number>
          {editingA ? (
            <input
              type="text"
              name="phone"
              value={userData?.phone}
              onChange={handleInputA}
            />
          ) : (
            <h4>{userData?.phone}</h4>
          )}
        </Number>
        <hr></hr>
        <ExperBox>
          <div>
            Expertise
            <img
              onClick={() => setEditingB(!editingB)}
              style={{
                width: '20px',
                height: '20px',
                marginLeft: '740px',
                marginTop: '-20px',
              }}
              src="../Media/icons/pencil-alt-solid.svg"
              alt=""
            />
          </div>
        </ExperBox>
        <MergesBoxs>
          {editingB ? (
            <input
              type="text"
              name="merges"
              value={details?.merges}
              onChange={handleInputB}
            />
          ) : (
            <span>{details?.merges}</span>
          )}
        </MergesBoxs>
        <ExperBox>Specialties</ExperBox>
        <div>
          <MergesBox>
            {editingB ? (
              <input
                type="text"
                name="cross"
                value={details?.cross}
                onChange={handleInputB}
              />
            ) : (
              <span>{details?.cross}</span>
            )}
          </MergesBox>
          <MergesBox
            style={{ marginLeft: '200px', marginTop: '-20px', width: '175px' }}
          >
            {editingB ? (
              <input
                type="text"
                name="transaction"
                value={details?.transaction}
                onChange={handleInputB}
              />
            ) : (
              <span>{details?.transaction}</span>
            )}
          </MergesBox>
        </div>
        <ExperBox>Admission to practice law</ExperBox>
        <div>
          <MergesBox>
            {editingB ? (
              <input
                type="text"
                name="paris"
                value={details?.paris}
                onChange={handleInputB}
              />
            ) : (
              <span>{details?.paris}</span>
            )}
          </MergesBox>
          <MergesBox
            style={{ marginLeft: '200px', marginTop: '-20px', width: '175px' }}
          >
            {editingB ? (
              <input
                type="text"
                name="bar"
                value={details?.bar}
                onChange={handleInputB}
              />
            ) : (
              <span>{details?.bar}</span>
            )}
          </MergesBox>
        </div>
        <ExperBox>Counties</ExperBox>
        <MergesBox style={{ width: '55px' }}>
          {editingB ? (
            <input
              type="text"
              name="tunisia"
              value={details?.tunisia}
              onChange={handleInputB}
            />
          ) : (
            <span>{details?.tunisia}</span>
          )}
        </MergesBox>
        <hr></hr>
        <PanelBox>Panel informations</PanelBox>
        <HurTer>Hourly fee</HurTer>
        <MontHo>610$/hour (Negocited)</MontHo>
        <HurTer>Terms & codnitions</HurTer>
        <MontHo>
          <div>
            Monthly 10k$ retainer - see with{' '}
            <h4
              style={{
                marginLeft: '214px',
                marginTop: '-16px',
                width: '175px',
              }}
            >
              {userData?.name}
            </h4>
          </div>
        </MontHo>
        <AttachmentBox>
          <input type="file" />
        </AttachmentBox>
        <PanelBox>Services & projects</PanelBox>
        <CorpoBox>Corporate M&A and international acquistions</CorpoBox>
        <InterBox>International correspodants</InterBox>
        <NameBox>
          <MiniatureImage src={photosList[2] ? photosList[2].url : ''} alt="" />
          <h4>{usersList?.[0]?.name}</h4>
          <img
            style={{ width: '20px', height: '20px', marginLeft: '160px' }}
            src="../Media/icons/comment-regular.svg"
            alt=""
          />
          <h4 style={{ marginLeft: '10px' }}>Message</h4>
          <img
            style={{ width: '20px', height: '20px', marginLeft: '160px' }}
            src="../Media/icons/user-regular.svg"
            alt=""
          />

          <h4 style={{ marginLeft: '10px' }}>Profile</h4>
        </NameBox>
        <NameBoxs>
          <MiniatureImage src={photosList[4] ? photosList[4].url : ''} alt="" />
          <h4>{usersList?.[0]?.name}</h4>
          <img
            style={{ width: '20px', height: '20px', marginLeft: '160px' }}
            src="../Media/icons/comment-regular.svg"
            alt=""
          />
          <h4 style={{ marginLeft: '10px' }}>Message</h4>
          <img
            style={{ width: '20px', height: '20px', marginLeft: '160px' }}
            src="../Media/icons/user-regular.svg"
            alt=""
          />

          <h4 style={{ marginLeft: '10px' }}>Profile</h4>
        </NameBoxs>
        <hr></hr>
        <PanelBox>Proposals</PanelBox>
        <TableRow>
          <TableTitle>Name</TableTitle>
          <TableTitle>Entity</TableTitle>
          <TableTitle>Location</TableTitle>
          <TableTitle>Expertise</TableTitle>
          <TableTitle>Date</TableTitle>
          <TableTitle>Firm</TableTitle>
        </TableRow>
        <hr></hr>
        <TableRows>
          <TableTitle>Operation</TableTitle>
          <TableTitle>Renault HQ</TableTitle>
          <TableTitle>USA</TableTitle>
          <TableTitle>#M&A</TableTitle>
          <TableTitle>18/02/2019</TableTitle>
          <TableTitle>Clifford chance</TableTitle>
        </TableRows>
        <TableRows>
          <TableTitle>Operation</TableTitle>
          <TableTitle>Renault HQ</TableTitle>
          <TableTitle>USA</TableTitle>
          <TableTitle>#M&A</TableTitle>
          <TableTitle>18/02/2019</TableTitle>
          <TableTitle>Clifford chance</TableTitle>
        </TableRows>
        <TableRows>
          <TableTitle>Operation</TableTitle>
          <TableTitle>Renault HQ</TableTitle>
          <TableTitle>USA</TableTitle>
          <TableTitle>#M&A</TableTitle>
          <TableTitle>18/02/2019</TableTitle>
          <TableTitle>Clifford chance</TableTitle>
        </TableRows>
        SEE more Proposals
        <hr></hr>
        <PanelBox>Internal reviews</PanelBox>
        <TableRow>
          <TableTitle>Name</TableTitle>
          <TableTitle>Entity</TableTitle>
          <TableTitle>Location</TableTitle>
          <TableTitle>Expertise</TableTitle>
          <TableTitle>Date</TableTitle>
        </TableRow>
        <hr></hr>
        <TableRows>
          <TableTitle>Operation</TableTitle>
          <TableTitle>Renault HQ</TableTitle>
          <TableTitle>USA</TableTitle>
          <TableTitle>#M&A</TableTitle>
          <TableTitle>18/02/2019</TableTitle>
        </TableRows>
        <TableRows>
          <TableTitle>Operation</TableTitle>
          <TableTitle>Renault HQ</TableTitle>
          <TableTitle>USA</TableTitle>
          <TableTitle>#M&A</TableTitle>
          <TableTitle>18/02/2019</TableTitle>
        </TableRows>
        <TableRows>
          <TableTitle>Operation</TableTitle>
          <TableTitle>Renault HQ</TableTitle>
          <TableTitle>USA</TableTitle>
          <TableTitle>#M&A</TableTitle>
          <TableTitle>18/02/2019</TableTitle>
        </TableRows>
        <PanelBox>See more reviews</PanelBox>
        <hr></hr>
        <PanelBox>Amount of fees</PanelBox>
        <TableRow>
          <TableTitle>Year</TableTitle>
          <TableTitle>Cost center</TableTitle>
          <TableTitle>Total amount</TableTitle>
          <TableTitle>Law firm</TableTitle>
        </TableRow>
        <TableRows>
          <TableTitle>2019</TableTitle>
          <TableTitle>CS 153</TableTitle>
          <TableTitle>3500</TableTitle>
          <TableTitle>Clifford chance</TableTitle>
        </TableRows>
        <TableRows>
          <TableTitle>2018</TableTitle>
          <TableTitle>CS 153</TableTitle>
          <TableTitle>9500</TableTitle>
          <TableTitle>Linklaters</TableTitle>
        </TableRows>
        <TableRows>
          <TableTitle>2017</TableTitle>
          <TableTitle>CS 153</TableTitle>
          <TableTitle>10500</TableTitle>
          <TableTitle>Linklaters</TableTitle>
        </TableRows>
        <TableRows>
          <TableTitle></TableTitle>
          <TableTitle>CS 463</TableTitle>
          <TableTitle>18500</TableTitle>
          <TableTitle>Linklaters</TableTitle>
        </TableRows>
        <TableRows>
          <TableTitle></TableTitle>
          <TableTitle>CS 153</TableTitle>
          <TableTitle>15500</TableTitle>
          <TableTitle>Cl2ifford</TableTitle>
        </TableRows>
        <TableRows>
          <TableTitle></TableTitle>
          <TableTitle>CS 153</TableTitle>
          <TableTitle>1600</TableTitle>
          <TableTitle>Linklaters</TableTitle>
        </TableRows>
      </FirstBox>
    </Wrapper>
  )
}