Feature: As a follower, I would like to be able to join a room, so that I can view lyrics

  Scenario: I am a follower
    Given I am a follower
    When enter a room code
    And press join
    And the code is valid
    Then I join a leader's session
    And I can view lyrics