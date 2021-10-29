Feature: As a leader, I would like to be able to create a socket.io room, so that followers can join my session?

  Scenario: I am not a leader
    Given I am not a leader
    When I create a room
    Then ensure room is not created
