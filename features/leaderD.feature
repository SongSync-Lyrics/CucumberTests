Feature: As a follower, I would like to be able to join a room, so that I can view lyrics

  Scenario: I am a follower
    Given I am a follower
    When I enter a valid room code
    And press join
    Then I join a leader's session
    And I can view lyrics

Scenario: I am a follower
    Given I am a follower
    When I enter a invalid room code
    And press join
    Then I can't join a leader's session
    And I cannot view lyrics