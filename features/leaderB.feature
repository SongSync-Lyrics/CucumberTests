Feature: As a leader, I would like the program to register that I am a leader, so that only I can lead the session

  Scenario: I am a leader
    Given I am a "leader"
    When I join a room
    Then ensure I am a leader
    And I can lead the session
    
  Scenario: I am a follower
    Given I am a "follower"
    When I join a room
    Then ensure I am a follower
    And I cannot lead the session